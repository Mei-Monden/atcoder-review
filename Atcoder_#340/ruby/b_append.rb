A = []

Q = gets.to_i

Q.times do
  query = gets.split
  type = query[0].to_i

  if type == 1
    x = query[1].to_i
    A << x
  elsif type == 2
    k = query[1].to_i
    puts A[-k]
  end
end
