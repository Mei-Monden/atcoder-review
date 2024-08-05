def max_currency(n, a, s, t)
  (0...(n-1)).each do |i|
    if a[i] >= s[i]
      a[i+1] += (a[i] / s[i]) * t[i]
    end
  end

  a[-1]
end

n = gets.to_i
a = gets.split.map(&:to_i)
s = []
t = []
(n-1).times do
  si, ti = gets.split.map(&:to_i)
  s << si
  t << ti
end

puts max_currency(n, a, s, t)
