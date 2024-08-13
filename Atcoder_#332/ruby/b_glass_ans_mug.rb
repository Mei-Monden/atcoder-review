k, g, m = gets.split(" ").map(&:to_i)

glass = 0
mug = 0

k.times do |i|
  if glass == g
    glass = 0
  elsif mug == 0
    mug = m
  else
    transfer = [mug, g - glass].min
    mug -= transfer
    glass += transfer
  end
end

puts "#{glass} #{mug}"
