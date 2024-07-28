n, k = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

start_count = 0
seats = k

a.each do |group_size|
  if group_size > seats
    start_count += 1
    seats = k
  end
  seats -= group_size
end

start_count += 1 if seats < k

puts start_count
