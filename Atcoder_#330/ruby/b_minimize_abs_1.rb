n, l, r = gets.split(" ").map(&:to_i)
a = gets.split.map(&:to_i)

ans = []
n.times do |i|
  if a[i] < l
    ans << l
  elsif r < a[i]
    ans << r
  else
    ans << a[i]
  end
end

puts ans.join(" ")
