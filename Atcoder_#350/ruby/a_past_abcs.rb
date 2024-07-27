s = gets.chomp

number = s[3..5].to_i

if (1..315).include?(number) || (317..349).include?(number)
  puts "Yes"
else
  puts "No"
end
