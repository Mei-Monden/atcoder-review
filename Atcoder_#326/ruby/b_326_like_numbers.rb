n = gets.to_i

def calculation(n)
  num_char = num.to_s.chars.map(&:to_i)
  num_char[0] * num_char[1] == num_char[2]
end

while true
  if calculation(n)
    puts n
    break
  end
  n += 1
end
