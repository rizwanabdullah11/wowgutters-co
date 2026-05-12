$file = "constants/blogData.tsx"
$content = Get-Content $file -Raw -Encoding UTF8

# Fix encoding issues
$content = $content -replace 'â€"', '—'
$content = $content -replace 'Â£', '£'

# Save with UTF-8 encoding
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllLines($file, $content, $Utf8NoBomEncoding)

Write-Host "Fixed encoding issues in $file"
