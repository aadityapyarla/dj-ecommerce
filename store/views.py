from django.shortcuts import redirect, render


def store(request):
    context = {}
    return render(request, 'store/store.html', context)


def cart(request):
    context = {}
    return render(request, 'store/cart.html', context)


def checkout(request):
    context = {}
    return render(request, 'store/checkout.html', context)


def admin(request):
    return redirect('/admin')


def search(request):
    return render(request, 'store/search.html')


def detail(request):
    return render(request, 'store/detail.html')
