n, q = gets.split.map(&:to_i)
treatments = gets.split.map(&:to_i)

teeth = Array.new(n, true)

treatments.each do |t|
  index = t - 1
  teeth[index] = !teeth[index]
end

result = teeth.count(true)

puts result
