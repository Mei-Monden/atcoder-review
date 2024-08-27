n, m, p = gets.split(" ").map(&:to_i)

count = 0
i = 0

while true
  if m + p*i > n
    break
  else
    count += 1
    i += 1
  end
end 

puts count
