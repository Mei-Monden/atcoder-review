h = gets.to_i

height = 0

days = 0

while height <= h
  height += 2 ** days
  days += 1
end

puts days
