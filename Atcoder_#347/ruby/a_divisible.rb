n, k = gets.split.map(&:to_i)

a = gets.split.map(&:to_i)

ans = []

n.times do |i|
  if a[i] % k == 0
    ans << a[i] / k
  end
end

puts ans.join(' ')
