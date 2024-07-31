x = gets.to_i

if x % 10 == 0
  puts x / 10
else
  puts (x + 9) / 10
end
