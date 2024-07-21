n, m = gets.split.map(&:to_i)

a = gets.split.map(&:to_i)
b = gets.split.map(&:to_i)

c = (a + b).sort

consecutive_a = false
(n + m - 1).times do |i|
  if a.include?(c[i]) && a.include?(c[i + 1])
    consecutive_a = true
    break
  end
end

result = consecutive_a ? "Yes" : "No"

puts result
