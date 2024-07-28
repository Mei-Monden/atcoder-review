n = gets.to_i
a = gets.split.map(&:to_i)

num_of_people = 2 * n;
ans = 0
i = 0

(num_of_people - 2).times do
  if a[i] == a[i + 2]
    ans += 1
  end
  i += 1
end

puts ans
