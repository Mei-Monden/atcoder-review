n, m = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

total_nutrients = Array.new(m, 0)

n.times do
  x = gets.split.map(&:to_i)
  m.times do |j|
    total_nutrients[j] += x[j]
  end
end

achieved = true
m.times do |i|
  if total_nutrients[i] < a[i]
    achieved = false
    break
  end
end

if achieved
  puts "Yes"
else
  puts "No"
end
