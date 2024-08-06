a, b, d = gets.split.map(&:to_i)

array = []
current = a
while current <= b
  array << current
  current += d
end

puts array.join(" ")
