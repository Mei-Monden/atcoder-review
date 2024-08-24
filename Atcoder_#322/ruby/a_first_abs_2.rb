n = gets.to_i
s = gets.chomp

position = s.index("ABC")

if position.nil?
  puts -1
else
  puts position + 1
end
