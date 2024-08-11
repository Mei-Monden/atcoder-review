a, m, l, r = gets.split.map(&:to_i)

k_min = (l - a + m - 1) / m
k_max = (r - a) / m 

result = [k_max - k_min + 1, 0].max

puts result
