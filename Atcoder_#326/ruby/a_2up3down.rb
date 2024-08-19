x, y = gets.split.map(&:to_i)

result = "No"

if y > x && y <= x + 2
  result = "Yes"
elsif y < x && y >= x - 3
  result = "Yes"
end

puts result
