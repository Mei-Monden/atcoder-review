n = gets.to_i
count = 0

n.times do
  s = gets.chomp
  if s == "Takahashi"
    count += 1
  end
end

puts count