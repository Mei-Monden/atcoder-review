s = gets.chomp

result = "Yes"

(1..15).step(2) do |i|
  if s[i] == '0'
    result = "No"
    break
  end
end

puts result
