b = gets.to_i
ans = -1

(1..b).each do |a|
  aa = a**a
  if aa == b
    ans = a
    break
  elsif aa > b
    break
  end
endz

puts ans
