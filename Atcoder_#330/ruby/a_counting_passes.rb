n, l = gets.split(" ").map(&:to_i)
a = gets.split.map(&:to_i)

count = 0

n.times do |i|
  if a[i] >= l
    count += 1
  end
end

puts count
