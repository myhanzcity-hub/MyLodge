$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$workspaceRoot = Split-Path $projectRoot -Parent
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$deliveryRoot = Join-Path $workspaceRoot "deliverables/MyLodge-$stamp"
$sourceRoot = Join-Path $deliveryRoot 'MyLodge-source'
New-Item -ItemType Directory -Path $sourceRoot -Force | Out-Null

# Explicit folders and source extensions: no runtime logs, Git metadata or environment files.
Get-ChildItem -LiteralPath $projectRoot -File | Where-Object {
  $_.Extension -in '.html','.css','.js','.mjs','.json','.md','.cmd'
} | Copy-Item -Destination $sourceRoot
foreach ($folder in @('assets','scripts','docs','backups','마이롯지프로젝트 공용 문서')) {
  if (!(Test-Path -LiteralPath (Join-Path $projectRoot $folder))) { continue }
  Copy-Item -LiteralPath (Join-Path $projectRoot $folder) -Destination $sourceRoot -Recurse
}
$referenceRoot = Join-Path $sourceRoot 'reference'
$reviewRoot = Join-Path $sourceRoot 'review'
New-Item -ItemType Directory -Path $referenceRoot,$reviewRoot -Force | Out-Null
foreach ($name in @('마이롯지_플랫폼_기획서_20260924_v0.1.docx','마이롯지_홍보페이지_개발순서_보고서_20260924_v0.1.docx')) {
  $reference = Join-Path $workspaceRoot "review/$name"
  if (Test-Path -LiteralPath $reference) { Copy-Item -LiteralPath $reference -Destination $referenceRoot }
}
foreach ($name in @('motion-audit-final-20260929.png','motion-audit-mobile-20260929.png','final-consultation-20260929.png')) {
  $capture = Join-Path $workspaceRoot "review/$name"
  if (Test-Path -LiteralPath $capture) { Copy-Item -LiteralPath $capture -Destination $reviewRoot }
}
$manifest = Get-ChildItem -LiteralPath $sourceRoot -Recurse -File | ForEach-Object {
  [pscustomobject]@{Path=$_.FullName.Substring($sourceRoot.Length+1);Bytes=$_.Length;SHA256=(Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash}
}
$manifest | Export-Csv -LiteralPath (Join-Path $sourceRoot 'CONTENTS-SHA256.csv') -NoTypeInformation -Encoding utf8
$sourceZip = Join-Path $deliveryRoot 'MyLodge-developer-20260929.zip'
$publicZip = Join-Path $deliveryRoot 'MyLodge-public-20260929.zip'
Compress-Archive -LiteralPath $sourceRoot -DestinationPath $sourceZip
Compress-Archive -Path (Join-Path $projectRoot 'dist/*') -DestinationPath $publicZip
Get-FileHash -LiteralPath $sourceZip,$publicZip -Algorithm SHA256 | Export-Csv -LiteralPath (Join-Path $deliveryRoot 'ZIP-SHA256.csv') -NoTypeInformation -Encoding utf8
Write-Output "Delivery folder: $deliveryRoot"
Get-Item -LiteralPath $sourceZip,$publicZip | Select-Object Name,Length,FullName
