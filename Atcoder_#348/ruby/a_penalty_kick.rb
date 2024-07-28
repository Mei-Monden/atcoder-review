n = gets.to_i

result = ""
n.times do |i|
 if (i+1)%3 == 0
  result << "x"
 else
  result << "o"
 end
end

puts result
