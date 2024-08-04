n = gets.to_i
p = gets.chomp.split.map(&:to_i)
q = gets.to_i

positions = {}
p.each_with_index do |person, index|
  positions[person] = index
end

q.times do
  Ai, Bi = gets.chomp.split.map(&:to_i)
  if positions[Ai] < positions[Bi]
    puts Ai
  else
    puts Bi
  end
end
