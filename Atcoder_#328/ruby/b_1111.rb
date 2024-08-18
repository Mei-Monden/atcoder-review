n = gets.to_i
d = gets.split.map(&:to_i)

count = 0

(1..n).each do |i|
  (1..days[i-1]).each do |j|
    if i.to_s.chars.uniq.size == 1 && j.to_s.chars.uniq.size == 1
      count += 1 if i.to_s[0] == j.to_s[0]
    end
  end
end

puts count

