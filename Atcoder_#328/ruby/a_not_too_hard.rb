n, x  = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

a.delete_if { |num| num > x }

sum = a.sum
puts sum
