n = gets.to_i
s = gets.chomp
s_char = s.chars

result = "No"

n.times do |i|
  if s_char[i] == "a" && s_char[i+1] == "b"
    result = "Yes"
  elsif s_char[i] == "b" && s_char[i+1] == "a"
    result = "Yes"
  end
end

puts result
