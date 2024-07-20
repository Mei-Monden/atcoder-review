n, l, r = gets.split.map(&:to_i)

a = (1..n).to_a

reversed_part = a[(l-1)..(r-1)].reverse
a[(l-1)..(r-1)] = reversed_part

puts a.join(' ')
