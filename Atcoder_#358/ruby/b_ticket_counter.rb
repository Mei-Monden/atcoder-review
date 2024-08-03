n,a = gets.split.map(&:to_i)
t = gets.split.map(&:to_i)

ans = 0;
i = 0;

n.times do
  if i == 0
    ans += t[i] + a
  elsif ans >= t[i]
    ans += a
  else
    ans = t[i] + a
  end
  i += 1
  puts ans
end
