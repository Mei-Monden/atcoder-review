n = gets.to_i
a = gets.split.map(&:to_i)

ans = []

(n-1).times do |i|
  ans << a[i] * a[i+1]
end

puts ans.join(" ")
