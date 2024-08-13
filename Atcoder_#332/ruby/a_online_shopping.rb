n, s, k = gets.split(" ").map(&:to_i)

sum = 0
n.times do |i|
  p,q = gets.split(" ").map(&:to_i)
  sum += p * q
end

if sum < s
  puts sum + k
else
  puts sum
end
