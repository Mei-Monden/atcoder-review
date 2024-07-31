s = gets.chomp
char = s.chars

side = char.first == "<" && char.last == ">"
middle = char[1..-2].all? { |c| c == "=" }

if side && middle
  puts "Yes"
else
  puts "No"
end
