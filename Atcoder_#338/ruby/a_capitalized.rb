s = gets.chomp

s_chars = s.chars
n = s.length - 1
result = "Yes"

if s_chars[0] == s_chars[0].upcase
  n.times do |i|
    if s_chars[i + 1] == s_chars[i + 1].downcase
      next
    else
      result = "No"
      break
    end
  end
else
  result = "No"
end

puts result
