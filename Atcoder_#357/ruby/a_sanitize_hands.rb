n, m = gets.split.map(&:to_i)
h = gets.split.map(&:to_i)

sum = 0

n.times do |i|
  sum += h[i]
  if sum > m
    puts i 
    break
  elsif sum == m
    puts i + 1
    break
  end
end

puts n if sum < m
