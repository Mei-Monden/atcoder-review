n = gets.to_i
a = gets.split.map(&:to_i)

max_value = a.max
a.delete(max_value)

puts a.max
