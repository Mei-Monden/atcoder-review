n = gets.to_i

def ctz(n)
  binary = n.to_s(2)
  count = 0

  binary.reverse.each_char do |char|
    break if char == '1'
    count += 1
  end
  count
end
puts ctz(n)
