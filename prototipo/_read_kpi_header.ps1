$file = Get-ChildItem -Path ".." -Filter "*Titulaci*.csv" | Select-Object -First 1
$lines = [System.IO.File]::ReadAllLines($file.FullName, [System.Text.Encoding]::Unicode)
$header = $lines[0] -split "`t"
$out = @()
for ($i=0; $i -lt $header.Length; $i++) { $out += ("[$i] " + $header[$i]) }
$out += "---sample row 1---"
$out += ($lines[1] -split "`t")
$out | Out-File -FilePath "$env:TEMP\kpi_headers.txt" -Encoding utf8
