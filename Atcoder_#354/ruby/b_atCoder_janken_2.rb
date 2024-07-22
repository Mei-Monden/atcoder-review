n = gets.to_i
users = []

n.times do
  s, c = gets.split
  c = c.to_i
  users << [s, c]
end

users.sort_by!(&:first)

total_rate = users.sum { |user| user[1] }

winner_index = total_rate % n

puts users[winner_index].first
