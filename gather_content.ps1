$outputPath = "page_content.md"
if (Test-Path $outputPath) { Remove-Item $outputPath }

$files = @()
$files += Get-ChildItem "src/pages/*.tsx"
$files += Get-ChildItem "src/lib/*.ts"
$files += Get-ChildItem "src/lib/*.tsx"

$files | ForEach-Object {
    $header = "`n# File: " + $_.Name + "`n`n```" + $_.Extension.TrimStart('.') + "`n"
    Add-Content -Path $outputPath -Value $header
    Get-Content $_.FullName | Add-Content -Path $outputPath
    Add-Content -Path $outputPath -Value "`n```n"
}
Write-Host "Done writing to $outputPath"
