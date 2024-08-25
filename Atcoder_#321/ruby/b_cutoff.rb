n, x = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

sum = a.sum - a.max - a.min


if (sum + a.min >= x)
  puts 0
elsif (x - sum) > a.max
  puts -1
else
  puts x - sum
end
