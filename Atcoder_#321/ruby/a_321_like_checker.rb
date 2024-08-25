n = gets.chomp

result = "Yes"

(n.length - 1).times do |i|
  if n[i] <= n[i + 1]
    result = "No"
    break
  end
end

puts result
