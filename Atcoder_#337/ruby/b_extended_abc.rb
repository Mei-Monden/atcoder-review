s = gets.chomp
s_chars = s.chars

result = "Yes"

s.length.times do |i|
  if s_chars[i-1] == "B" && s_chars[i] == "A"
    result = "No"
    break
  elsif s_chars[i-1] == "C" && s_chars[i] == "A" || s_chars[i] == "B"
    result = "No"
    break
  elsif s_chars[i-1] == "B" || s_chars[i-1] == "C"
    result = "No"
    break
  else
    next
  end
end

puts result
