a, b = gets.split.map(&:to_i)

if a == b
  result = -1
elsif (a == 1 && b == 2) || (a == 2 && b == 1)
  result = 3
elsif (a == 2 && b == 3) || (a == 3 && b == 2)
  result = 1
else
  result = 2
end

puts result
