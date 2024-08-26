n = gets.to_i

result = []

(0..n).each do |i|
  found = false
  (1..9).each do |j|
    if n % j == 0 && i % (n / j) == 0
      result << j.to_s
      found = true
      break
    end
  end
  result << "-" unless found
end

puts result.join
